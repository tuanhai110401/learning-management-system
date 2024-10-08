import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        component="a"
        href={link.link}
        className="p-1 whitespace-nowrap text-[#CBD5E1] text-[14px] font-[400] leading-[150%] hover:text-white"
      >
        {link.label}
      </Text>
    ));

    return (
      <div key={group.title}>
        <Text className="text-[#F1F5F9] text-[18px] font-[500] pb-2">
          {group.title}
        </Text>
        <div className="flex flex-col justify-center">{links}</div>
      </div>
    );
  });

  return (
    <footer className="bg-[#1E293B] ">
      <Container
        fluid
        className=" flex justify-between py-8 border-b-[1px] lg:mx-[80px] sm:mx-[16px]"
      >
        <div>
          <span className="text-[#F1F5F9] text-[28px] pb-2">Logo</span>
          <Text className="text-[#CBD5E1] text-[14px] leading-[150%]" size="xs">
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className="flex justify-center gap-4 sm:gap-4 md:gap-8 lg:gap-20">
          {groups}
        </div>
      </Container>
      <Container className=" flex justify-between items-center py-2">
        <Text c="dimmed" className="text-[14px] leading-[150%]">
          © 2024 HairDev. All rights reserved.
        </Text>

        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            icon
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            icon
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            icon
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
