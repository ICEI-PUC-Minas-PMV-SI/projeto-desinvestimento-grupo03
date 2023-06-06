import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useEffect } from 'react';

import { PowerBiDataset } from "./../../models/PowerBiModels";
import PowerBiEmbeddingService from "./../../services/PowerBiEmbeddingService";

interface EmbeddedNewReportProperties {
  datasets: PowerBiDataset[]
}

interface EmbeddedNewReportRouteParams {
  id: string;
}

type EmbeddedNewReportPropertiesWithRouter =
  EmbeddedNewReportProperties &
  RouteComponentProps<EmbeddedNewReportRouteParams>;

class EmbeddedNewReport extends React.Component<EmbeddedNewReportPropertiesWithRouter, any> {

  
  render() {
    let datasetIdRouteParam: string = this.props.match.params.id;
    let noDatasetId = (datasetIdRouteParam === undefined);
    let dataset: PowerBiDataset | undefined = this.props.datasets.find((dataset: PowerBiDataset) => dataset.id == datasetIdRouteParam);
    let badDatasetId: boolean = (datasetIdRouteParam != "") && (dataset === undefined)

    if (noDatasetId) {
      return (
        <div className="message-body" >
          clique na fonte ao lado para criar um relatório<br/>

          <p style={{color:'red'}}>Atenção! Seção avançada: A manipulação dos dados requer habilidades no Power BI. Tome cuidado para evitar problemas de visualização.</p>
        </div>);
    }
    if (badDatasetId) {
      return (
        <div className="message-body" >
          <div>'{datasetIdRouteParam}' não é uma fonte válida</div>
        </div>);
    }
    return (
      <div id="embedded-report" >
        <div id='embed-container' ></div>
      </div>);
  }


  componentDidUpdate() {
    this.updateEmbeddedReport();
  }
  componentDidMount() {
    this.updateEmbeddedReport();
  }

  updateEmbeddedReport() {
    let datasetIdRouteParam: string = this.props.match.params.id;
    let dataset: PowerBiDataset | undefined = this.props.datasets.find((dataset: PowerBiDataset) => dataset.id == datasetIdRouteParam);
    if (dataset) {
      var embedContainer: HTMLElement = document.getElementById('embed-container')!;
      PowerBiEmbeddingService.embedNewReport(dataset!, embedContainer);
    }
  }
}

export default withRouter<EmbeddedNewReportPropertiesWithRouter>(EmbeddedNewReport);