import { RegistrationTabs } from "@/components/tabs/registration-tabs";

export default function Page() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-2 text-center  ">
        <h2 className="font-heading px-8 py-2 text-3xl font-extrabold leading-[1.1] sm:text-3xl md:text-4xl">
          Registration Form
        </h2>
        <RegistrationTabs />
      </div>
    </>
  );
}
