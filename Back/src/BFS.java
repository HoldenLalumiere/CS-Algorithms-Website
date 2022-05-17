import java.io.*;
import java.util.ArrayList;

/**
 * Does a Breadth First Search on the user's data
 * Input must be in the following form:
 *
 */
public class BFS {

    public void runBFS(File input){ //TODO update front end to save user input to a temp file
        BufferedReader br;
        try {
            br = new BufferedReader(new FileReader(input));
            String line = br.readLine();
            int n = Integer.parseInt(line);
            System.out.println(n); //TODO remove
            br.mark(0);

            BFSNode[] nodes = new BFSNode[n];




            ArrayList<> queue = new ArrayList<>();
            for (int x = 0; x < nodes.length; x++){
                int l = 0;
                BFSNode start = nodes[x];
                if (start.layer == -1){

                }
            }



        } catch (IOException e) {
            System.out.println("Something went wrong"); //TODO change this to print something on screen and change the message
        }
    }








}
