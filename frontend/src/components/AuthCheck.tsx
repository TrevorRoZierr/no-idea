import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const AuthCheck = () => {
  return (
    <>
      <SignedOut>
        <button className="px-4 py-2 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded-lg bg-green-500 text-black">
          <SignInButton />
        </button>
      </SignedOut>
      <SignedIn>
        <button>
          <UserButton />
        </button>
      </SignedIn>
    </>
  );
};

export default AuthCheck;
