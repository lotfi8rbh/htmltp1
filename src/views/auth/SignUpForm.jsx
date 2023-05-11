import InputField from "components/fields/InputField";
import { Link } from 'react-router-dom';
export default function SIform() {
  return (
    <div className="mt-13 mb-13 flex h-full w-full items-center justify-center px-5 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Créez un nouveau compte
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Saisissez vos informations pour vous inscrire
        </p>

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Left column */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {/* Nom */}
            <InputField   
              variant="auth"
              extra="mb-3"
              label="Nom*"
              placeholder="Nom"
              id="nom"
              type="text"
            />
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
            />
            {/* Cabinet */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Cabinet*"
              placeholder="Cabinet"
              id="cabinet"
              type="text"
            />
            {/* Numero de tel */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Numero de tel*"
              placeholder="Numero de tel"
              id="numero-de-tel"
              type="tel"
            />
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/2 px-3">
            {/* Prenom */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Prenom*"
              placeholder="Prenom"
              id="prenom"
              type="text"
            />
            {/* Mot de passe */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Mot de passe*"
              placeholder="Min. 8 caractères"
              id="password"
              type="password"
            />
            {/* Adresse */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Adresse*"
              placeholder="Adresse"
              id="adresse"
              type="text"
            />
          </div>
        </div>

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          S'inscrire
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Vous avez déjà un compte ?

          </span>
          <Link
            to="/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Connectez-vous
          </Link>
        </div>
      </div>
    </div>
  );
}
