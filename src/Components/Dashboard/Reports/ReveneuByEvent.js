import React from "react";
import Nav from "../Nav/Nav";
import {
  FaBeer,
  FaWindowClose,
  FaTimesCircle,
  FaHeart,
  FaSortNumericDown,
  FaRegHandPaper,
  FaVenus,
} from "react-icons/fa";
import TopNav from "../Nav/TopNav";

export default function RevenueByEvent() {
  return (
    <div class="">
      <TopNav searchBarVisibility={false} />

      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              {/* <div
                class="col-lg-12 alert-info text-center rounded mb-2 "
                style={{ zIndex: "999" }}
              >
                <p class="pt-3">Click on the product to edit</p>
              </div> */}
              <div
                class="col-lg-12 grid-margin stretch-card "
                style={{ zIndex: "999" }}
              >
                <div class="card">
                  <div class="card-body table-widthy">
                    <table class="table ">
                      <thead>
                        <tr>
                          <th>
                            <b>Event Name</b>
                          </th>
                     
                          <th>
                            <b># Of Guests</b>
                          </th>{" "}
                          <th>
                            <b>Revenue</b>
                          </th>{" "}
                          <th>
                            <b>Revenue per Guest</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea </td>
                          <td>57</td>
                          <td>7000$</td>
                          <td>120$</td>
                       
                        </tr>
                  
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
