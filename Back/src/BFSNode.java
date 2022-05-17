import java.util.LinkedHashSet;
import java.util.Set;

public class BFSNode {
    // Node number
    public int id;
    // BFS layer
    public int layer;
    // Adjacent nodes
    public Set<BFSNode> adj;

    public BFSNode(int id) {
        this.id = id;
        adj = new LinkedHashSet<BFSNode>();
        layer = -1; // Unvisited
    }

    /**
     * Add the given node to the adjacency set of this node
     *
     * @param node the node to add
     */
    public void addAdj(BFSNode node) {
        if (this.id == node.id) {
            throw new RuntimeException("loops not allowed");
        } else {
            adj.add(node);
        }
    }

    /**
     * Add the node to the adjacency set of this node and the other node
     *
     * @param node the node to add
     */
    public void addEdge(BFSNode node) {
        // Add node to this adj set
        addAdj(node);
        // Add this to node's adj set
        node.addAdj(this);
    }

    //TODO remove this if not used
    public String toString() {
        String s = "Node[" + id + "]:";
        for (BFSNode node : adj) {
            s += " " + node.id;
        }
        return s;
    }
}
