/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];

    dfs(root, [], result);

    return result;
};

var dfs = function(node, current, result){
    if(!node){
        return;
    }

    current.push(node.val);
    if(!node.left && !node.right){
        result.push(current.join("->"));
    }
    else{
        dfs(node.left, current, result);
        dfs(node.right,current, result);
    }

    current.pop();
};
