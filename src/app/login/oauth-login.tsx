"use client";
import { Provider } from "@supabase/supabase-js";
import { loginGoogleAccount } from "./actions";
import { GoogleIcon, FigmaIcon, FacebookIcon } from "@/svg";
import { Button } from "@mantine/core";
import ButtonCustom from "@/components/Button";
type OAuthProviderType = {
  name: Provider;
  title: string;
  icon?: JSX.Element;
  clientId?: string;
  scope?: string[];
  color?: string;
};

export function OAuthButton() {
  const dataProvider: OAuthProviderType[] = [
    {
      name: "facebook",
      title: "Facebook",
      icon: <FacebookIcon />,
      color: "#0866FF",
    },
    {
      name: "google",
      title: "Google",
      icon: <GoogleIcon />,
      color: "#EA4335",
    },
    {
      name: "figma",
      title: "Figma",
      icon: <FigmaIcon />,
    },
  ];
  return (
    <div className="w-full flex justify-between items-center gap-4">
      {dataProvider &&
        dataProvider.map((item, index) => (
          <Button
            style={{ padding: "16px 0", height: "auto" }}
            className="w-4/12 rounded-lg "
            key={index}
            variant="outline"
            leftSection={item.icon}
            color={item.color || "#000000"}
            onClick={async () => {
              await loginGoogleAccount("google");
            }}
          >
            {item.title}
          </Button>
        ))}
    </div>
  );
}
