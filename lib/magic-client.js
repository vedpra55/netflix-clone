import { Magic } from "magic-sdk";
import { useRouter } from "next/router";

const CreateMagic = () => {
  return (
    typeof window !== "undefined" &&
    new Magic(process.env.NEXT_PUBLIC_MAGIC_KEY)
  );
};

export async function getEmailAddress() {
  try {
    const { email } = await magic.user.getMetadata();
    return email;
  } catch (err) {
    console.log(err);
    return "user";
  }
}

export async function handleLogOut() {
  await magic.user.logout();
}

export async function handleLogin(
  setShowValidationError,
  setLoadingSignIn,
  email,
  router
) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    setShowValidationError(false);
    setLoadingSignIn(true);
    try {
      const didToken = await magic.auth.loginWithMagicLink({ email });
      console.log(didToken);
      if (didToken) {
        router.push("/");
        setLoadingSignIn(false);
      }
    } catch (err) {
      console.log(err);
      setLoadingSignIn(false);
    }
  } else {
    setLoadingSignIn(false);
    setShowValidationError(true);
  }
}

export const magic = CreateMagic();
