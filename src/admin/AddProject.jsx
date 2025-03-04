import React, { useState } from "react";
import { useFormState } from "react-dom";

async function formAction(prevState, formData) {
  const name = formData.get("title");

  if (!name) {
    return { error: "Name is required!" };
  }

  return { success: `Hello, ${name}!` };
}

function AddProject() {
  

  return (
    <div className="xl:container border pt-5">
      <div className="flex">
        <div className="flex-1/2">
          <form onSubmit={formAction}>
            <div className="grid grid-cols-2">
              <div>
                <input type="text" name="title" />
              </div>
            </div>
          </form>
        </div>
        <div className="flex-1/2">{/* Side images */}</div>
      </div>
    </div>
  );
}

export default AddProject;
