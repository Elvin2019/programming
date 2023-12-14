// class Nod {
//     data: any;
//     left: Nod | null;
//     right: Nod | null;
//     numSubordinates: number;


//     constructor(data: any) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//         this.numSubordinates = 0;
//     }
// }

// class BinarySearchTree {
//     root: Nod | null;

//     constructor() {
//         this.root = null;
//     }

//     // DFS code
//     depthFirstSearch(rootNode: Nod | null = this.root): void {
//         if (!rootNode) return;
//         if (rootNode.left) {
//             rootNode.numSubordinates++;
//         }
//         if (rootNode.right) {
//             rootNode.numSubordinates++;
//         }

//         this.depthFirstSearch(rootNode.left);
//         this.depthFirstSearch(rootNode.right);
//     }
// }

// // const tree = new BinarySearchTree();

// // Create nodes
// const node1 = new Nod(1);
// const node2 = new Nod(1);
// const node3 = new Nod(2);
// const node4 = new Nod(3);
// // const node5 = new Nod(5);


// // const node6 = new Nod(6);
// // const node7 = new Nod(7);


// // Build the tree
// tree.root = node1;
// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// // node3.left = node6;
// // node3.right = node7;

// tree.depthFirstSearch()
// console.log(`Number of subordinates for node ${node1.data}: ${node1.numSubordinates}`);
// console.log(`Number of subordinates for node ${node2.data}: ${node2.numSubordinates}`);
// console.log(`Number of subordinates for node ${node3.data}: ${node3.numSubordinates}`);
// console.log(`Number of subordinates for node ${node4.data}: ${node4.numSubordinates}`);
// console.log(`Number of subordinates for node ${node5.data}: ${node5.numSubordinates}`);
// // console.log(tree.root, t);


function countSubordinates(n: number, bosses: number[]): number[] {
    const graph: number[][] = [];
    for (let i = 0; i <= n; i++) {
      graph.push([]);
    }
  
    for (let i = 1; i < n; i++) {
      const boss = bosses[i - 1];
      graph[boss].push(i + 1);
    }
  
    const subordinates: number[] = Array(n + 1).fill(0);
  
    function dfs(node: number): number {
      let count = 0;
      for (const child of graph[node]) {
        count += dfs(child);
      }
      subordinates[node] = count;
      return count + 1;
    }
  
    dfs(1);
  
    return subordinates.slice(1);
  }
  
  // Example usage
  const n = 5;
  const bosses = [1, 1, 2, 3];
  const result = countSubordinates(n, bosses);
  console.log(result.join(" "));