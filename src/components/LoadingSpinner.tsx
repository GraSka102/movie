import { Alert, Spin } from "antd";
import React, { ReactElement } from "react";

export function LoadingSpinner(): ReactElement {
  return (
    <div>
      <Spin tip="Loading...">
        <Alert message="Die Daten werden geladen ..." type="info" />
      </Spin>
    </div>
  );
}
