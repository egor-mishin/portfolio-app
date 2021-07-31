import * as React from "react";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import css from "./index.module.css";
import Button from "../common/Button";


type Props = {
  title?: string
  image?: { url: string }
  textBox?: string
  button?: { title: string }
}

const IntroSection: FC<Props> = ({ title, image, textBox, button }): JSX.Element => {
  return (
    <header className={css.introSection}>
      <div className="container flex">
        <div className={css.textBox}>
          <article data-aos="fade-right"
                   data-aos-delay="300"
                   data-aos-easing="ease-in-back"
                   data-aos-offset="0">
            <ReactMarkdown>
              {title}
            </ReactMarkdown>
            <ReactMarkdown>
              {textBox}
            </ReactMarkdown>
          </article>
          {
            button && <div data-aos="fade-up"
                 data-aos-delay="350"
                 data-aos-easing="ease-in-back"
                 data-aos-offset="0">
              <Button url={"/portfolio"}>{button.title}</Button>
            </div>
          }
        </div>

        <div className={css.avatar} data-aos="fade-left" data-aos-delay="200">
          <img
            src={image.url}
            alt="Picture of the author"
            width={372}
            height={447}
          />
        </div>
      </div>
    </header>
  );
};

export default IntroSection;
