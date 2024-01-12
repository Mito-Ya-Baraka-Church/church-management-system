import { RegistrationTabs } from "@/components/tabs/registration-tabs";

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 md:py-12">
        <div className="flex w-full flex-col items-center justify-center gap-2 text-center  ">
          <h2 className="font-heading px-8 text-3xl font-extrabold leading-[1.1] sm:text-3xl md:text-4xl ">
            Registration Form
          </h2>
          <RegistrationTabs />
        </div>
      </section>
    </>
  );
}
