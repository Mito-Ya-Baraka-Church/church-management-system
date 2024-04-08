import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { MembersTable } from "@/components/members/members-data-table";
import { membersColumns } from "@/components/members/members-columns";

const membersResponse = {
  members: [
    {
      first_name: "John",
      last_name: "Doe",
      phone_number: "1234567890",
      email: "john.doe@example.com",
      tribe: "Tribe A",
      location_name: "Location X",
      nationality: "American",
      gender: "Male",
      date_of_visit: "January 1, 2022",
      married: true,
      marriage_date: "December 25, 2020",
      baptized: true,
      baptism_date: "January 1, 2020",
      born_again: true,
      born_again_date: "January 1, 2021",
    },
    {
      first_name: "Jane",
      last_name: "Doe",
      phone_number: "0987654321",
      email: "jane.doe@example.com",
      tribe: "Tribe B",
      location_name: "Location Y",
      nationality: "Canadian",
      gender: "Female",
      date_of_visit: "February 1, 2022",
      married: false,
      marriage_date: null,
      baptized: false,
      baptism_date: null,
      born_again: false,
      born_again_date: null,
    },
    {
      first_name: "Alice",
      last_name: "Smith",
      phone_number: "1122334455",
      email: "alice.smith@example.com",
      tribe: "Tribe C",
      location_name: "Location Z",
      nationality: "British",
      gender: "Female",
      date_of_visit: "March 1, 2022",
      married: true,
      marriage_date: "February 14, 2020",
      baptized: true,
      baptism_date: "March 1, 2020",
      born_again: true,
      born_again_date: "March 1, 2021",
    },
    {
      first_name: "Bob",
      last_name: "Johnson",
      phone_number: "5566778899",
      email: "bob.johnson@example.com",
      tribe: "Tribe D",
      location_name: "Location W",
      nationality: "Australian",
      gender: "Male",
      date_of_visit: "April 1, 2022",
      married: false,
      marriage_date: null,
      baptized: false,
      baptism_date: null,
      born_again: false,
      born_again_date: null,
    },
  ],
};

export default function Page() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-4 lg:py-32">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">All Members</h1>
        <MembersTable
          columns={membersColumns}
          data={membersResponse?.members ?? []}
        />
      </div>
    </section>
  );
}
