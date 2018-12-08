import $ from "jquery";
import DataTable from "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";

var isInit = false,
  payeeTable;

var self = {
  init: function(options) {
    if (!isInit) {
      isInit = true;
      console.log(isInit);
      self.initTable();
      self.registerEvents();
    }
  },
  initTable: function() {
    console.log("hello");
    payeeTable = $("#payee-main").DataTable({
      ajax: "external/api/domains.json",
      columns: [
        {
          className: "text-center details-control",
          orderable: false,
          data: null,
          mRender: function(data) {
            return `<div><span class="fa fa-caret-square-o-down"></span><span class="fa fa-caret-square-o-right"></span></div>`;
          }
        },
        { data: "domain.domName" },
        { data: "currBank.bankName" },
        { data: "currBank.routingNbr" },
        { data: "currBank.accountNbr" },
        { data: "currBank.achStatus" },
        { data: "eraName" },
        {
          data: null, //log
          orderable: false,
          className: "text-center",
          mRender: function(data) {
            return `<div><span class="fa fa-book"></span></div>`;
          }
        },
        {
          data: null, //delete
          orderable: false,
          className: "text-center",
          mRender: function(data) {
            return `<div><span class="fa fa-trash"></span></div>`;
          }
        },
        {
          data: "hasRule", //enroll rule
          orderable: false,
          className: "text-center",
          mRender: function(data) {
            return `<div>${
              data
                ? '<div class="view-rule"><div><span class="fa fa-cog"></div><span>View Rule</span></div></span>'
                : '<div class="add-rule"><div><span class="fa fa-plus"></div><span>Add Rule</span></div></span>'
            }</div>`;
          }
        }
      ],
      order: [[1, "asc"]]
    });
  },
  registerEvents: function() {
    // Add event listener for opening and closing details
    $("#payee-main tbody").on("click", "td.details-control", function() {
      var tr = $(this).closest("tr");
      var row = payeeTable.row(tr);

      if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass("shown");
      } else {
        // Open this row
        row.child(self.renderPayees(row.data())).show();
        tr.addClass("shown");
      }
    });

    // Add event listener for create new rule
    $("#payee-main tbody").on("click", "div.add-rule", function() {
      var tr = $(this).closest("tr");
      var row = payeeTable.row(tr);
      console.log("domain ID", row.data().domain.domID);
    });

    // Add event listener to view a rule
    $("#payee-main tbody").on("click", "div.view-rule", function() {
      var tr = $(this).closest("tr");
      var row = payeeTable.row(tr);
      console.log("domain ID", row.data().domain.domID);
    });
  },
  renderPayees: function(d) {
    // `d` is the original data object for the row
    return `<table cellpadding="9" cellspacing="0" border="0" style="padding-left:50px;">
      <tr>
        <td>Full name:</td>
        <td>${d.domain.domName}</td>
      </tr>
      <tr>
        <td>Extension number:</td>
        <td>${d.currBank.bankName}</td>
      </tr>
      <tr>
        <td>Extra info:</td>
        <td>And any further details here (images etc)...</td>
      </tr>
      </table>`;
  }
};

export default self;
