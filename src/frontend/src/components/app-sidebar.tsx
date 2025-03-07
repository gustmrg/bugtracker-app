import * as React from "react";
import {
  Bell,
  Bug,
  Building,
  LayoutGrid,
  Mail,
  Tickets,
  Trello,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavAdmin } from "@/components/nav-admin";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "bugtracker",
    email: "admin@bugtracker.com",
    avatar: "/avatars/shadcn.jpg",
  },
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
      icon: Trello,
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
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-violet-700 text-sidebar-primary-foreground">
                  <Bug className="size-4" fill="white" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">BugTracker</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
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
