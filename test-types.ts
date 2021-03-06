import Graph, {UndirectedGraph} from './src/endpoint.esm';

interface NodeAttributes {
  label: string
};

const graph: Graph<NodeAttributes> = new Graph({type: 'directed'});

graph.addNode('one', {label: 'Hello'});

graph.forEachNode((node, attr) => {
  console.log(node, attr);
});

function listener({key, attributes}: {key: string, attributes: NodeAttributes}) {
  console.log(key);
  console.log(attributes.label);
}

graph.on('nodeAdded', listener);
graph.off('nodeAdded', listener);

const undirectedGraph: UndirectedGraph = new UndirectedGraph();

undirectedGraph.clear();
