import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "../../redux/actions/authAction";
import { logout} from '../../redux/actions/authAction'
import Dropdown from "react-bootstrap/Dropdown";
import head from "../../images/head.jpeg";
const Drop = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refreshToken());
//   }, [dispatch]);
  return (
    <div className="flex">
      <Dropdown align="end" drop="down">
        <Dropdown.Toggle>
          <img className="w-10 h-10 rounded-full " src={head} />
        </Dropdown.Toggle>

        <Dropdown.Menu
          align="end"
          className=" p-2 text-green-500 bg-gray-500 rounded-md text-xl mt-2 py-4 "
        >
          <Dropdown.Item
            className="py-2 flex justify-center "
            onClick={() => dispatch(logout())}
          >
            <h1>{auth.token && "LOGOUT"}</h1>
          </Dropdown.Item>
          <Dropdown.Item className="py-2">
            <h2>SETTING</h2>
          </Dropdown.Item>
          <Dropdown.Item className="py-2">PROFILE</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Drop;
