import org.w3c.dom.Node;

import java.io.*;
import java.util.ArrayList;
import java.util.Iterator;

/**
 * Does a Breadth First Search on the user's data
 * Input must be in the following form:
 * <p>
 * totalNodeNum
 * nodeNum connectedNode connectedNode2 ...
 * node2Num connectedNode connectedNode2 ...
 */
public class BFS {

    public void runBFS(File input) { //TODO update front end to save user input to a temp file
        BufferedReader br;
        try {
            br = new BufferedReader(new FileReader(input));
            String line = br.readLine();
            int n = Integer.parseInt(line);
            System.out.println(n); //TODO remove
            br.mark(0);

            BFSNode[] nodes = new BFSNode[n];
            // Read node number
            for (int i = 0; i < n; i++) {
                line = br.readLine();
                int nodeNum = -1;
                String[] nums = line.trim().split("\\s+");
                nodeNum = Integer.parseInt(nums[1]);
                BFSNode node = new BFSNode(nodeNum);
                nodes[i] = node;
            }

            // Read adj list
            br.reset();
            for (int i = 0; i < n; i++) {
                line = br.readLine();
                String[] nums = line.trim().split("\\s+");
                for (int j = 1 /*TODO check if this is the correct number*/; j < nums.length; j++) {
                    int connection = Integer.parseInt(nums[j]);
                    nodes[i].addEdge(nodes[connection - 1]);
                }
            }
            br.close();

            // Print out every node
            //TODO test print, remove this
            for (int i = 0; i < n; i++) {
                System.out.println(nodes[i]);
            }

            // BFS traversal
            ArrayList<BFSNode> queue = new ArrayList<BFSNode>();
            for (int x = 0; x < nodes.length; x++) {
                int l = 0;
                BFSNode start = nodes[x];
                if (start.layer == -1) {
                    start.layer = 1;
                    System.out.println(start.id + "(" + start.layer + ") "); //TODO idk if this needs change yet
                    queue.add(nodes[x]);
                    l++;

                    while (queue.size() > 0) {
                        BFSNode u = queue.remove(0);
                        l = u.layer;
                        Iterator<BFSNode> it = u.adj.iterator();
                        l++;
                        while (it.hasNext()) {
                            BFSNode v = it.next();
                            if (v.layer == -1) {
                                v.layer = l;
                                queue.add(v);
                                System.out.println(v.id + "(" + v.layer + ") "); //TODO idk if this needs change yet
                            }
                        }
                    }
                }
            }


        } catch (IOException e) {
            System.out.println("Something went wrong"); //TODO change this to print something on screen and change the message
        }
    }


}
