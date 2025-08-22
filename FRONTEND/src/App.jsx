import "./App.css";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";

import { USE_ZUSTAND_MAIN_STORE } from "@/store/Zustand.Main.Store.js";

import FeaturesSearch from "@/features/search/features.search";

function App() {
  const { STRING_CURRENT_LINK, ACTION_CLEAR_ALL } = USE_ZUSTAND_MAIN_STORE();

  const handleLinkChange = (event) => {
    setCurrentLink(event.target.value);
  };

  const handleAddLink = (event) => {
    USE_ZUSTAND_MAIN_STORE.setState({
      STRING_CURRENT_LINK: event.target.name,
    });
  };
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-full max-w-sm items-center gap-2">
        {/* <Input type="link" placeholder="Email" />
        <Button type="submit" variant="outline">
          Download
        </Button> */}
        {/* <FeaturesSearch
          PROPS_HANDLE_CHANGE={handleLinkChange}
          PROPS_LINK_VALUE={currentLink}
        /> */}
        <p>STRING_CURRENT_LINK: {STRING_CURRENT_LINK}</p>

        <Button
          type="submit"
          variant="outline"
          name="asdf"
          onClick={(e) => handleAddLink(e)}
        >
          Download
        </Button>
      </div>
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;

// "https://www.tiktok.com/@jettasnfl/video/7479241674846260523?is_from_webapp=1&sender_device=pc",

// loading state => data.success(always true) => data.status = "success" ||  "error"
// status true:
//    result:  {
//      status: 'success',
//      result: {
//        type: 'video',
//        author: {
//          avatar: 'https://fastdl.muscdn.app/a/images/aHR0cHM6Ly9wMTYtc2lnbi12YS50aWt0b2tjZG4uY29tL3Rvcy1tYWxpdmEtYXZ0LTAwNjgvYTZiOGRiZDgwZWZmOTY1YWY5NjA5ODAxMWQ5NzI1NGV+dHBsdi10aWt0b2t4LWNyb3BjZW50ZXI6MzAwOjMwMC5qcGVnP2RyPTE0NTc3JnJlZnJlc2hfdG9rZW49ODRjNGI4MmEmeC1leHBpcmVzPTE3NTUyNDQ4MDAmeC1zaWduYXR1cmU9b05hTTNYQjdBUzJTT2V4bHlZUjVVVEFIOUMwJTNEJnQ9NGQ1YjA0NzQmcHM9MTM3NDA2MTAmc2hwPWQwNWIxNGJkJnNoY3A9MzRmZjhkZjYmaWRjPW1hbGl2YQ==',
//          nickname: '@jettasnfl'
//        },
//        desc: 'Lebron Lebron LeBron James. #fyp #NBA #viral #xzybca #basketball #trending #lebron #lebronjames',
//        videoSD: 'https://fastdl.muscdn.app/amV0dGFzbmZs/dl/aHR0cHM6Ly92MTZtLWRlZmF1bHQudGlrdG9rY2RuLmNvbS9iMzc5OGNjZjc2OGZhZmExMmNjZTlmNzRhNDNiMjQzNy82ODlkZWVlNC92aWRlby90b3MvbWFsaXZhL3Rvcy1tYWxpdmEtdmUtMDA2OGM3OTktdXMvb3dMZXpERUVSRUxBdFM0Zm83SVE0MERuUk9CRkVEUjVCZ2xxbXkvP2E9MCZidGk9T1VCek9UZzdRR282T2paQUwzQWpMVEF6WUNNeE5ETmcmY2g9MCZjcj0wJmRyPTAmZXI9MCZscj1hbGwmbmV0PTAmY2Q9MCU3QzAlN0MwJTdDMCZjdj0xJmJyPTIzODQmYnQ9MTE5MiZjcz0wJmRzPTYmZnQ9RWVGNG50WldEMGhRMTJOdkR1ekVXSXhSbkRjOEVxXzQ1U1kmbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPU9tUTVaak16TnpvN1pEYzZaRFJwTkVCcGFtMDhlVzQ1Y2pkemVUTXpaemN6TkVBdFltTXpObDVnTlM4eEx6TXhOREl0WVNNdGNUQXZNbVJqYVRKZ0xTMWtNUzl6Y3clM0QlM0QmdnZwbD0xJmw9MjAyNTA4MTQxNjEyMzAwRUU3QjQzMzkxQkQxMTA5QzFGQSZidGFnPWUwMDBiODAwMA==',
//        videoHD: 'https://fastdl.muscdn.app/amV0dGFzbmZs/hd/aHR0cHM6Ly92MTYudG9rY2RuLmNvbS80ODZmOTMyZTQ3ZjlhNDc5YzcwNGI4ODk2ZDFlYjU4NC82N2NiODg4MC83NDc5MjQxNjc0ODQ2MjYwNTIzX29yaWdpbmFsLm1wNA==',
//        videoWatermark: 'https://fastdl.muscdn.app/amV0dGFzbmZs/dl/aHR0cHM6Ly92MTZtLWRlZmF1bHQudGlrdG9rY2RuLmNvbS81NDliOTg0NDExNGRiNmM1YmNlNzI4NWJjMGY1ZmZhYS82ODlkZWVlNC92aWRlby90b3MvbWFsaXZhL3Rvcy1tYWxpdmEtdmUtMDA2OGM3OTktdXMvb1FSNXVlZ3MwRVhCTEQ0bkFCUVZFbUlMZnFFbldCRFN6RG9SeUYvP2E9MCZidGk9T1VCek9UZzdRR282T2paQUwzQWpMVEF6WUNNeE5ETmcmY2g9MCZjcj0wJmRyPTAmZXI9MCZscj1hbGwmbmV0PTAmY2Q9MCU3QzAlN0MwJTdDMCZjdj0xJmJyPTI0NDgmYnQ9MTIyNCZjcz0wJmRzPTMmZnQ9RWVGNG50WldEMGhRMTJOdkR1ekVXSXhSbkRjOEVxXzQ1U1kmbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPU5qazBPVGxrTkdrMU9UczhPelk2T0VCcGFtMDhlVzQ1Y2pkemVUTXpaemN6TkVBMExtTmpMVEV5TmpReFhtRmVMMkV1WVNNdGNUQXZNbVJqYVRKZ0xTMWtNUzl6Y3clM0QlM0QmdnZwbD0xJmw9MjAyNTA4MTQxNjEyMzAwRUU3QjQzMzkxQkQxMTA5QzFGQSZidGFnPWUwMDBiODAwMA=='
//      }
//    }
// status false:
// data: {
//   message: "Invalid TikTok URL",
//   status: "error"
// },
// success: true
/*
    input url
    check url if its valid
      - invalid: return error message => invalid url
      - valid: axios api
    axios api
      - try catch?
      - use assert function design
      - check data.status
        status:success
          - setState to zustand
          - card
            - author
            - desc
            - type
          - download card
            - videoHD => Button
            - videoSD => Button
            - videoWatermark => Button
          - do a stacking(stack structure || linkedList) feature where you can download list
          - save to localstorage
          - button to download again
        status:error
          - throw
          - return error message => invalid url

    Components
      - core input
        - input for texts
      - core loading
      - core error
      - core texts
        - big
        - small
  */
