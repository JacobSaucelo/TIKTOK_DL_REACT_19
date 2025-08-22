import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

const FeaturesSearch = ({ PROPS_HANDLE_CHANGE, PROPS_LINK_VALUE }) => {
  const handleDownload = async () => {
    axios
      .post("http://localhost:3000/download/", {
        url: PROPS_LINK_VALUE,
      })
      .then((res) => res.data)
      .then((data) => {
        console.log("Download successful:", data);
      })
      .catch((error) => {
        console.error("Error downloading video:", error);
      });
  };

  return (
    <section>
      <Input
        type="link"
        placeholder="Email"
        onChange={PROPS_HANDLE_CHANGE}
        value={PROPS_LINK_VALUE}
      />

      <Button type="submit" variant="outline" onClick={handleDownload}>
        check
      </Button>
    </section>
  );
};

export default FeaturesSearch;
