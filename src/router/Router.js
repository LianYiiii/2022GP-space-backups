import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "../register/Register";
import Login from "../login/Login";
import Person from "../person/Person";
import IndexSpace from "../indexSpace/IndexSpace";
import NotFound from "../notfound/NotFound";
import Mine from "../Components/Mine.js";
import DetailContents from "../Components/DetailContents";

var rgx = /^[0-9]*$/;
export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<IndexSpace />}>
          <Route path="/mine" element={<Mine />} />
        </Route>
        <Route path={"detail/:id"} element={<DetailContents />}></Route>

        <Route path="*" element={<NotFound />} />
        <Route path="person" element={<Person />} />
      </Routes>
    </HashRouter>
  );
}
