import * as React from 'react';
import './ViewHome.css';

export default class ViewHome extends React.Component<any, any> {
  render() {
    return (
      <div id="view-home" className="content-body" >
        <div className="row">
          <div className="jumbotron col">
            <h3>Sistema de Análise de Dados</h3>
            <p>Saudações, elaboramos este projeto para contribuir cpm a conscientização sobre a importância da adoção de medidas sustentáveis nas organizações e, consequentemente, para a preservação do meio ambiente e dos recursos naturais. Por isso desenvolvemos este dashboard como forma de um estudo, pois desta forma será possível compreender a quantidade e quais equipamentos serão desinvestidos para que não haja descarte duvidoso e que isso não venha afetar a imagem da empresa e o meio ambiente.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Visualizações Interativas</h4>
            <div>Experimente visualizações interativas em seus dashboards e relatórios, para entender seus dados em tempo real.
            </div>
          </div>
          <div className="col">
            <h4>Atualização Automática de Dados</h4>
            <div>Mantenha-se atualizado com informações de negócios em tempo real com atualizações automáticas de dados.</div>
          </div>
        </div>
      </div>
    );
  }
}
