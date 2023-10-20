import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { useForm, SubmitHandler } from "react-hook-form";

import "./contactform.scss";

interface IFormInput {
  name: string;
  email: string;
  phone: number;
  message: string;
}

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <section className="form">
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__box">
            <div className="form__text">
              <div className="form__title">
                <h1>Contact Us</h1>
              </div>
              <div className="form__desc">
                <p>
                  Ready to take it to the next level? Let’s talk about your
                  project or idea and find out how we can help your business
                  grow. If you are looking for unique digital experiences that’s
                  relatable to your users, drop us a line.
                </p>
              </div>
            </div>
            <div className="form__fields">
              <input
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="input"
                type="text"
                placeholder="Name"
              />
              {errors?.name?.type === "required" && (
                <span>This field is required</span>
              )}
              {errors?.name?.type === "pattern" && (
                <span>English characters only</span>
              )}
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                })}
                className="input"
                type="text"
                placeholder="Email"
              />
              {errors?.email?.type === "required" && (
                <span>This field is required</span>
              )}
              {errors?.email?.type === "pattern" && <span>Invalid email</span>}

              <input
                {...register("phone", {
                  required: true,
                  pattern:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                })}
                className="input"
                type="text"
                placeholder="Phone"
              />
              {errors?.phone?.type === "required" && (
                <span>This field is required</span>
              )}
              {errors?.phone?.type === "pattern" && (
                <span>Only valid phone numbers</span>
              )}

              <textarea className="textarea" placeholder="Your Message" />
              <input className="submit" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </Wrapper>
    </section>
  );
};
