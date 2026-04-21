import PageClientSwitcher from "@/components/PageClientSwitcher";
import FoundationID from "@/components/id/FoundationID";
import FoundationEN from "@/components/en/FoundationEN";

export default function Foundation() {
  return (
    <PageClientSwitcher 
      idComponent={<FoundationID />} 
      enComponent={<FoundationEN />} 
    />
  );
}
