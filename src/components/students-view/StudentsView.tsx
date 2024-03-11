import { StudentsTable } from "@components";
import { Header } from "@components/ui/text";

export const StudentsView = () => (
  <>
  <Header value="Students" className="mb-4" />
    <section>
      <StudentsTable />
    </section>
  </>
)

