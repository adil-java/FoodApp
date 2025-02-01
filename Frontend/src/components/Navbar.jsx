import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart } from "../context/contextReducer";

function Navbar() {
  let role = localStorage.getItem("role");
  const [cart, setcart] = useState(false);
  const data = useCart();
  const navigate = useNavigate();

  const cartHandler = () => {
    setcart((prev) => !prev);
    if (cart === true) {
      let set = document.querySelector("home");
      set.style.display = "none";
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div>
      <header>
        <div id="home" className="flex items-center m-auto w-full h-[50px] bg-orange-400 text-cyan-200 justify-between px-4 md:px-8">
          <Link className="fs-1 fst-italic text-black no-underline" to="/">
            FoodApp
          </Link>

          {(localStorage.getItem("authToken")) ? (
            <ul className="mt-3 flex gap-4 text-sm md:text-base">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white no-underline font-bold" : "text-slate-600 no-underline"
                }
                to="/"
              >
                Home
              </NavLink>
              {role === "seller" ? null : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white no-underline font-bold" : "text-slate-600 no-underline"
                  }
                  to="/__"
                >
                  My Orders
                </NavLink>
              )}
            </ul>
          ) : (
            <ul className="mt-3 flex gap-4 text-sm md:text-base">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white no-underline font-bold" : "text-slate-600 no-underline"
                }
                to="/"
              >
                Home
              </NavLink>
            </ul>
          )}

          {!(localStorage.getItem("authToken")) ? (
            <div className="flex gap-2">
              <button className="bg-black btn text-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white no-underline font-bold" : "text-slate-400 no-underline"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </button>

              <button className=" btn bg-black text-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white no-underline font-bold" : "text-slate-400 no-underline"
                  }
                  to="/createuser"
                >
                  SignUp
                </NavLink>
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="bg-black btn text-center">
                {role === "seller" ? (
                  <NavLink
                    onClick={cartHandler}
                    className={({ isActive }) =>
                      isActive ? "text-white no-underline font-bold" : "text-slate-400 no-underline"
                    }
                    to="/Upload"
                  >
                    Add NewItem
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={cartHandler}
                    className={({ isActive }) =>
                      isActive ? "text-white no-underline font-bold" : "text-slate-400 no-underline"
                    }
                    to="/cart"
                  >
                    My Cart <Badge pill bg="danger">{data.length}</Badge>
                  </NavLink>
                )}
              </button>
              <button className="m-1 btn bg-black text-center" onClick={handleLogOut}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white no-underline font-bold" : "text-slate-400 no-underline"
                  }
                  to="/createuser"
                >
                  Log Out
                </NavLink>
              </button>
            </div>
          )}

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button className="text-white" onClick={() => setcart(!cart)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile cart/menu view (conditional rendering for cart visibility) */}
      {cart && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50">
          <div className="w-2/3 bg-white p-4">
            <h2>Your Cart</h2>
            {/* Add Cart Items or Links */}
            <button onClick={cartHandler}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
