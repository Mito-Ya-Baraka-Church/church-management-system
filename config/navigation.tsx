export const navigationConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
  ],
  dashboardSubHeaderNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
      tabs: [
        {
          title: "Overview",
          href: "/dashboard",
        },
        {
          title: "Analytics",
          href: "/dashboard/analytics",
        },
      ],
    },
    {
      title: "Members",
      href: "/dashboard/members",
      icon: "members",
      tabs: [
        {
          title: "All Members",
          href: "/dashboard/members",
        },
        {
          title: "Add Member",
          href: "/dashboard/members/add",
        },
      ],
    },
    {
      title: "Attendance",
      href: "/dashboard/attendance",
      icon: "attendance",
      tabs: [
        {
          title: "Attendance",
          href: "/dashboard/attendance",
        },
        {
          title: "Add Attendance",
          href: "/dashboard/attendance/add",
        },
      ],
    },
    {
      title: "Events",
      href: "/dashboard/events",
      icon: "events",
      tabs: [
        {
          title: "All Events",
          href: "/dashboard/events",
        },
        {
          title: "Add Event",
          href: "/dashboard/events/add",
        },
      ],
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
      tabs: [
        {
          title: "Settings",
          href: "/dashboard/settings",
        },
        {
          title: "Profile",
          href: "/dashboard/settings/profile",
        },
        {
          title: "Billing",
          href: "/dashboard/settings/billing",
        },
      ],
    },
  ],

  dashboardSubHeaderAdminNav: [
    {
      name: "Finance",
      href: "/dashboard/admin/finance",
    },
    {
      name: "Users",
      href: "/dashboard/admin/users",
    },
    {
      name: "Roles",
      href: "/dashboard/admin/roles",
    },
    {
      name: "Permissions",
      href: "/dashboard/admin/permissions",
    },
    {
      name: "Settings",
      href: "/dashboard/admin/settings",
    },
  ],
  footerNav: [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
      icon: "privacy-policy",
    },
    {
      title: "Terms of Service",
      href: "/terms-and-conditions",
      icon: "terms-and-conditions",
    },
    {
      title: "Contact",
      href: "/contact",
      icon: "contact",
    },
  ],
};
