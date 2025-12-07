import React from "react";
import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";
import NavLinks from "./ui/NavLinks";
import Container from "./Container";

const FooterMobile = () => {
  return (
    <footer className="md:hidden w-full pt-20 pb-20 bg-background">
      <Container>
        <div className="w-full min-h-[400px] bg-[url('/footer.webp')] bg-cover bg-center relative rounded-[32px] overflow-hidden p-8">
          <div className="flex flex-col items-center space-y-6 mt-3">
            <h1 className="font-[family-name:var(--font-crimson)] font-medium text-[32px] md:text-[56px] leading-[38px] md:leading-[72px] text-center text-foreground">
              Have a project in mind?
            </h1>

            <Button className="w-full rounded-3xl cursor-pointer bg-white text-black hover:bg-neutral-200 py-6 mt-3 md:mt-0 px-9">
              Send a mail
            </Button>
            <div className="w-full mt-10">
              <div className="w-full pt-4 mt-1">
                <NavLinks isMobile />
              </div>
              <div className="w-fullborder">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterMobile;
