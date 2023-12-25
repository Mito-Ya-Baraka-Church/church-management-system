import { RegistrationFormGroup } from "@/components/forms/registration-form-group";


export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 py-8 md:py-10">
        <h2 className="font-heading text-3xl font-extrabold  leading-[1.1] sm:text-3xl md:text-4xl text-center my-4">
          Registration Form
          </h2>
      <div className="py-6 m-2 md:mx-10 md:mb-10 md:px-14 md:py-10">
     
        <RegistrationFormGroup/>      
        </div>
      </section>
    </>
  )
}
