import React from 'react';
import { useEffect, useState } from "react";

//--- DATA
import axios from "axios";

function PageName() {
  return "Calls"
}

export default function CallsPage() {

  return (
    <div className="container-xl">
      <h1 className="display-6"><PageName /></h1>
    </div>

  )
}


