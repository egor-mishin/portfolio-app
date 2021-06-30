import { useRouter } from "next/router";
import css from "../Button/index.module.css";

export default function BackButton() {
  const router = useRouter()
  return (
    <a onClick={() => router.back()} className={css.regular}>Go Back</a>
  )
}