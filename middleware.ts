import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:["/ajj","/sign-up","sign-in"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
