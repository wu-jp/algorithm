# 题目地址
https://leetcode.cn/problems/symmetric-tree/

# 题目描述

## 9101. 对称二叉树

给你一个二叉树的根节点 root ， 检查它是否轴对称。

###### 示例一

![](symtree1.jpg)
```text
输入：root = [1,2,2,3,4,4,3]
输出：true
```

###### 示例二

![](symtree2.jpg)
```text
输入：root = [1,2,2,null,3,null,3]
输出：false
```


#代码
```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// 递归判断是否为对称二叉树：
function isSymmetric(root: TreeNode | null): boolean {
    //使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false 
    const compareNode=function(left,right){
        //2. 确定终止条件 空的情况
        if(left===null&&right!==null||left!==null&&right===null){
            return false;
        }else if(left===null&&right===null){
            return true;
        }else if(left.val!==right.val){
            return false;
        }
        //3. 确定单层递归逻辑
        let outSide=compareNode(left.left,right.right);
        let inSide=compareNode(left.right,right.left);
        return outSide&&inSide;
    }
    if(root===null){
        return true;
    }
    return compareNode(root.left,root.right);
};


// 队列实现迭代判断是否为对称二叉树：
/* var isSymmetric = function(root) {
  //迭代方法判断是否是对称二叉树
  //首先判断root是否为空
  if(root===null){
      return true;
  }
  let queue=[];
  queue.push(root.left);
  queue.push(root.right);
  while(queue.length){
      let leftNode=queue.shift();//左节点
      let rightNode=queue.shift();//右节点
      if(leftNode===null&&rightNode===null){
          continue;
      }
      if(leftNode===null||rightNode===null||leftNode.val!==rightNode.val){
          return false;
      }
      queue.push(leftNode.left);//左节点左孩子入队
      queue.push(rightNode.right);//右节点右孩子入队
      queue.push(leftNode.right);//左节点右孩子入队
      queue.push(rightNode.left);//右节点左孩子入队
  }
  return true;
}; */

// 栈实现迭代判断是否为对称二叉树：
/* var isSymmetric = function(root) {
  //迭代方法判断是否是对称二叉树
  //首先判断root是否为空
  if(root===null){
      return true;
  }
  let stack=[];
  stack.push(root.left);
  stack.push(root.right);
  while(stack.length){
      let rightNode=stack.pop();//左节点
      let leftNode=stack.pop();//右节点
      if(leftNode===null&&rightNode===null){
          continue;
      }
      if(leftNode===null||rightNode===null||leftNode.val!==rightNode.val){
          return false;
      }
      stack.push(leftNode.left);//左节点左孩子入队
      stack.push(rightNode.right);//右节点右孩子入队
      stack.push(leftNode.right);//左节点右孩子入队
      stack.push(rightNode.left);//右节点左孩子入队
  }
  return true;
}; */

// > 递归法
/* function isSymmetric(root: TreeNode | null): boolean {
    function recur(node1: TreeNode | null, node2: TreeNode | null): boolean {
        if (node1 === null && node2 === null) return true;
        if (node1 === null || node2 === null) return false;
        if (node1.val !== node2.val) return false
        let isSym1: boolean = recur(node1.left, node2.right);
        let isSym2: boolean = recur(node1.right, node2.left);
        return isSym1 && isSym2
    }
    if (root === null) return true;
    return recur(root.left, root.right);
}; */

// 迭代法(队列)
/* function isSymmetric(root: TreeNode | null): boolean {
    let helperQueue: (TreeNode | null)[] = [];
    let tempNode1: TreeNode | null,
        tempNode2: TreeNode | null;
    if (root !== null) {
        helperQueue.push(root.left);
        helperQueue.push(root.right);
    }
    while (helperQueue.length > 0) {
        tempNode1 = helperQueue.shift()!;
        tempNode2 = helperQueue.shift()!;
        if (tempNode1 === null && tempNode2 === null) continue;
        if (tempNode1 === null || tempNode2 === null) return false;
        if (tempNode1.val !== tempNode2.val) return false;
        helperQueue.push(tempNode1.left);
        helperQueue.push(tempNode2.right);
        helperQueue.push(tempNode1.right);
        helperQueue.push(tempNode2.left);
    }
    return true;
} */

// 迭代法(栈)
/* function isSymmetric(root: TreeNode | null): boolean {
    let helperStack: (TreeNode | null)[] = [];
    let tempNode1: TreeNode | null,
        tempNode2: TreeNode | null;
    if (root !== null) {
        helperStack.push(root.left);
        helperStack.push(root.right);
    }
    while (helperStack.length > 0) {
        tempNode1 = helperStack.pop()!;
        tempNode2 = helperStack.pop()!;
        if (tempNode1 === null && tempNode2 === null) continue;
        if (tempNode1 === null || tempNode2 === null) return false;
        if (tempNode1.val !== tempNode2.val) return false;
        helperStack.push(tempNode1.left);
        helperStack.push(tempNode2.right);
        helperStack.push(tempNode1.right);
        helperStack.push(tempNode2.left);
    }
    return true;
}; */
```
