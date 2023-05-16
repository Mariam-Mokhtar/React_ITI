import React, { Component } from "react";

class Students extends Component {
    renderTableRows() {
        const { list } = this.props;
        console.log(list)
    
        if (list && list.length > 0) {
          return list.map((student, index) => (
            <tr key={student.id}>
              <th scope="row">{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.email}</td>
            </tr>
          ));
        } else {
          return (
            <tr>
              <td colSpan={3}>No Students</td>
            </tr>
          );
        }
      }

  render() {
    return (
    //   <div className="searchComp">
    //     <h1>Students</h1>
    //     {this.renderStudents(list)}
    //   </div>
      <table class="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
      {this.renderTableRows()}
      </tbody>
    </table>
    );
  }
}

export default Students;
