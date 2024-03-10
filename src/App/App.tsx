import * as React from "react";

import Assets from "~/components/Assets";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Heading from "~/components/Heading";
import Products, {Product} from "~/components/Products";
import {getUser} from "~/helpers/getUser";

export type User = {
  id: string;
  name: string;
  points: number;
  redeemHistory: Product[];
};

interface Context {
  user: {
    id: string;
    name: string;
    points: number;
    redeemHistory: Product[];
  };
  setuser: React.Dispatch<React.SetStateAction<User>>;
}

const initContext: Context = {
  user: {
    id: "",
    name: "",
    points: 0,
    redeemHistory: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setuser: () => {},
};

export const userContext = React.createContext(initContext);

const App: React.FC = () => {
  const initState = {
    id: "",
    name: "",
    points: 0,
    redeemHistory: [],
  };
  const [user, setuser] = React.useState<User>(initState);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getUser()
      .then((data) => setuser(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <userContext.Provider value={{user, setuser}}>
      <main>
        <Header loading={loading} />
        <Heading />
        <Assets />
        <Products />
        <Footer />
      </main>
    </userContext.Provider>
  );
};

export default App;
