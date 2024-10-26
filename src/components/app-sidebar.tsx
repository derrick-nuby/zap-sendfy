'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '@/components/ui/sidebar';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { footerItems, navigationItems } from '@/data/dashboardNavigationItems';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader>
      </SidebarHeader>

      <SidebarContent>
        {navigationItems.map((section) => (
          <Collapsible key={section.id} defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                  <div className="flex items-center">
                    <section.icon className="h-4 w-4 mr-2" />
                    <span>{section.label}</span>
                  </div>
                  <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.subItems && section.subItems.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton asChild isActive={pathname === `/${section.id}/${item.id}`}>
                          <Link href={`/${section.id}/${item.id}`} className="flex items-center w-full pl-6">
                            {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                            <span>{item.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t pt-7 pb-5">
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton asChild isActive={pathname === `/${item.id}`} className='hover:bg-background hover:text-foreground'>
                <Link href={`/${item.id}`} className="flex items-center w-full">
                  <item.icon className="h-4 w-4 mr-2" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}