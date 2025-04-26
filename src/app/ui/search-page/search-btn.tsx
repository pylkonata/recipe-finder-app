import { Button } from "@/app/ui/button";
interface SearchBtn
function SearchBtn({ disabled = false }) {
  return (
    <Button type="submit" disabled>
      Next
    </Button>
  );
}

export default SearchBtn;
