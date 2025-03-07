import * as React from "react";
import {
  AudioWaveform,
  Bell,
  Building,
  Command,
  FolderKanban,
  GalleryVerticalEnd,
  LayoutGrid,
  Mail,
  Tickets,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavAdmin } from "@/components/nav-admin";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutGrid,
      isActive: true,
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderKanban,
    },
    {
      title: "Tickets",
      url: "#",
      icon: Tickets,
    },
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
    },
  ],
  actions: [
    {
      name: "Users",
      url: "#",
      icon: Users,
    },
    {
      name: "Companies",
      url: "#",
      icon: Building,
    },
    {
      name: "Invites",
      url: "#",
      icon: Mail,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAdmin items={data.actions} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
