import React from "react";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";

import { UserModals } from "../../constants/ModalNames.Constants";
import { useOpenModalOverlay } from "../../hooks/useOverlayFunctions";
import { useApiFetchUserContact } from "../../hooks/useApiUserContact";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

export default function UserContactComponent() {
  const { authenticatedUser } = useAuthenticationStore();
  const { data: userContact } = useApiFetchUserContact();

  return (
    <section className="relative w-full p-5 overflow-hidden border sm:rounded-lg border-border-100 bg-background-gray_50 text-content-black">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="flex flex-col gap-0.5 pt-2">
        {/* Email */}
        <div className="flex items-center gap-5">
          <svg
            height="20px"
            width="20px"
            version="1.1"
            id="_x32_"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 text-content-black"
          >
            <g>
              <path
                fill="currentColor"
                d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009
		c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067
		c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745
		c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51
		c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05
		c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104
		c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929
		c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443
		c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925
		l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244
		c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16
		c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572
		c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"
              />
            </g>
          </svg>
          <p>{authenticatedUser?.email}</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-5">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 text-content-black"
          >
            <path
              d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
              fill="currentColor"
            />
          </svg>
          <p>{userContact?.phone}</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-5">
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 text-content-black"
          >
            <path
              fill="currentColor"
              d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"
            ></path>
          </svg>
          <p>{`${userContact.city}, ${userContact.province},  ${userContact.zip_code}, ${userContact.country}`}</p>
        </div>

        {/* Birth Date */}
        <div className="flex items-center gap-5">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 text-content-black"
          >
            <title>birthday-cake</title>
            <path
              fill="currentColor"
              d="M28 14.25h-3.25v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-6.5v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-6.5v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-3.25c-1.518 0.002-2.748 1.232-2.75 2.75v11c0.002 1.518 1.232 2.748 2.75 2.75h24c1.518-0.002 2.748-1.232 2.75-2.75v-11c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM4 15.75h3.25v2.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-2.25h6.5v2.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-2.25h6.5v2.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-2.25h3.25c0.69 0.001 1.249 0.56 1.25 1.25v7.186l-2.719-2.719c-0.142-0.134-0.334-0.217-0.546-0.217-0.021 0-0.042 0.001-0.062 0.002l0.003-0c-0.231 0.023-0.429 0.148-0.549 0.329l-0.002 0.003c-1.664 2.514-3.309 3.809-4.824 3.66-2.324-0.188-3.852-3.52-3.866-3.553-0.121-0.262-0.382-0.441-0.685-0.441s-0.562 0.178-0.682 0.435l-0.002 0.005c-0.016 0.033-1.526 3.322-3.843 3.518-1.497 0.090-3.172-1.129-4.852-3.627-0.123-0.182-0.32-0.305-0.547-0.328l-0.003-0c-0.021-0.002-0.045-0.003-0.070-0.003-0.208 0-0.396 0.083-0.533 0.218l-2.72 2.72v-7.187c0.001-0.69 0.56-1.249 1.25-1.25h0zM28 29.25h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-1.691l3.15-3.151c1.867 2.516 3.791 3.699 5.704 3.543 1.903-0.366 3.477-1.538 4.377-3.14l0.017-0.032c0.918 1.654 2.505 2.842 4.386 3.204l0.040 0.006c0.111 0.008 0.223 0.014 0.334 0.014 2.307-0.29 4.245-1.649 5.327-3.556l0.018-0.035 3.147 3.148v1.69c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM7.991 8.75c1.693-0.040 3.073-1.333 3.249-2.985l0.001-0.015c0-1.132-1.883-3.35-2.692-4.251-0.138-0.153-0.336-0.249-0.558-0.249h-0.001c-0.222 0-0.421 0.097-0.558 0.25l-0.001 0.001c-0.804 0.9-2.673 3.118-2.673 4.249 0.172 1.663 1.544 2.956 3.228 3l0.004 0zM7.993 3.148c0.699 0.744 1.284 1.605 1.723 2.549l0.025 0.060c-0.173 0.833-0.883 1.456-1.746 1.493l-0.004 0c-0.86-0.040-1.565-0.661-1.73-1.478l-0.002-0.012c0.457-1.005 1.039-1.867 1.739-2.617l-0.005 0.006zM15.991 8.75c1.693-0.040 3.072-1.333 3.248-2.985l0.001-0.015c0-1.132-1.882-3.35-2.691-4.251-0.138-0.153-0.336-0.249-0.558-0.249h-0.001c-0.222 0-0.421 0.097-0.558 0.25l-0.001 0.001c-0.804 0.9-2.673 3.118-2.673 4.249 0.172 1.663 1.544 2.956 3.228 3l0.004 0zM15.993 3.148c0.699 0.744 1.284 1.605 1.722 2.549l0.025 0.060c-0.135 0.851-0.863 1.493-1.741 1.493-0.877 0-1.604-0.641-1.739-1.48l-0.001-0.010c0.457-1.005 1.039-1.867 1.739-2.617l-0.005 0.006zM23.99 8.75c1.694-0.040 3.073-1.333 3.249-2.985l0.001-0.015c0-1.132-1.883-3.35-2.691-4.251-0.138-0.153-0.337-0.249-0.559-0.249h-0.002c-0.222 0.001-0.421 0.097-0.558 0.25l-0.001 0.001c-0.803 0.901-2.67 3.118-2.67 4.249 0.171 1.663 1.543 2.955 3.226 3l0.004 0zM23.992 3.149c0.699 0.744 1.285 1.605 1.723 2.548l0.025 0.060c-0.134 0.851-0.862 1.493-1.74 1.493-0.877 0-1.604-0.641-1.739-1.48l-0.001-0.010c0.456-1.004 1.037-1.867 1.737-2.616l-0.005 0.005z"
            ></path>
          </svg>
          <p>{userContact?.birth_date}</p>
        </div>
      </div>
      <div className="absolute flex items-center gap-1 right-5 top-5">
        <LinkEditUiComponent
          to={useOpenModalOverlay(UserModals.userContactEditModal.name)}
        />
      </div>
    </section>
  );
}
