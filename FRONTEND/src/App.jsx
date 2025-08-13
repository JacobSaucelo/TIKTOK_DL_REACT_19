import "./App.css";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-full max-w-sm items-center gap-2">
        <Input type="link" placeholder="Email" />
        <Button type="submit" variant="outline">
          Download
        </Button>
      </div>
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
