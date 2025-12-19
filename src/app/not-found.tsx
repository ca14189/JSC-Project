
export const dynamic = "force-static";

import Warning from "./Warning";

export default function NotFound() {
  return (
    <Warning
      title="Page Not Found"
      message="The page you are looking for does not exist."
      buttonText="Back to Home"
      buttonHref="/"
    />
  );
}


