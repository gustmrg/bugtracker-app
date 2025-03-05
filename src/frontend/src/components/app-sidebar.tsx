"use client";

import * as React from "react";
import { Bug, Building, FolderKanban, Tickets, UsersRound } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
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
    email: "bugtracker@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Projects",
      url: "#",
      icon: FolderKanban,
      items: [
        {
          title: "Create Project",
          url: "#",
        },
        {
          title: "All Projects",
          url: "#",
        },
        {
          title: "Archived Projects",
          url: "#",
        },
      ],
    },
    {
      title: "Tickets",
      url: "#",
      icon: Tickets,
      items: [
        {
          title: "Open Tickets",
          url: "#",
        },
        {
          title: "My Tickets",
          url: "#",
        },
        {
          title: "Resolved Tickets",
          url: "#",
        },
        {
          title: "Archived Tickets",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Companies",
      url: "#",
      icon: Building,
    },
    {
      name: "Users",
      url: "#",
      icon: UsersRound,
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
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">BugTracker</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
