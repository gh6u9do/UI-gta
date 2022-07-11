import React from "react";
import Avtorization from "../../layouts/Avtorization";

export default function Authorization() {
  const [step, setStep] = React.useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit (data) {
    console.log(data);
  }

  return (
    <Avtorization>
      <h1>Добро пожаловать, username!</h1>
      <p>
        Впервые здесь? Ваш аккаунт привязан к аккаунту SocialClub. Для
        дополнительной защиты придумайте пароль, по которому будете в будущем
        входить.
      </p>
      <div className="inputs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("password", {
              required: "Вы не ввели пароль",
              minLength: { value: 5, message: "Минимум 5 символов" },
              maxLength:{value:20, message:"Ваш пароль слишком большой"},
            })}
            type={"password"}
            placeholder="Пароль"
          />
          <input type={"password"} placeholder="Повтор пароля" />
          <input type={"submit"} value="Далее" />
        </form>
      </div>
    </Avtorization>
  );
}
