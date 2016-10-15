/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var result = [];
    var stack = [];
    var queue = [];

    var currentLevel = 1;
    var nextLevel = 0;

    if(!root){
        return result;
    }

    queue.push(root);

    while(queue.length !==0 ){
        // dequeue node from q
        var node = queue.shift();
        // push it to temp stack
        stack.push(node.val);
        //decrease current level
        currentLevel--;

        // if node has left, enqueue it
        if(node.left){
            queue.push(node.left);
            //inc next level
            nextLevel++;
        }
        // if node has right, enqueue it
        if(node.right){
            queue.push(node.right);
            //inc next level
            nextLevel++;
        }

        //level is zero?
        if(currentLevel === 0){
            //push contents of stack to result
            result.unshift(stack);
            currentLevel = nextLevel;
            // start over
            nextLevel = 0;
            stack = [];
        }

    }

    return result;
};
