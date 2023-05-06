const tasks = [
    {
        'key': 0,
        'shortDescription':'first coding exp',
        'isExperimental': true,
        'ideSettings':{},
        'description': 'package com.example.avl;\n' +
            '/*\n' +
            '\n' +
            'TASK DESCRIPTION: There is a bug in one method in class below.\n' +
            'Please, try to find and fix it.\n' +
            '\n' +
            ' */\n' +
            '\n' +
            'public class AVL {\n' +
            '    private InnerAvl root = null;\n' +
            '\n' +
            '    void updateHeight(InnerAvl n) {\n' +
            '        n.height = 1 + Math.max(height(n.leftChild), height(n.rightChild));\n' +
            '    }\n' +
            '\n' +
            '    int height(InnerAvl n) {\n' +
            '        return n == null ? -1 : n.height;\n' +
            '    }\n' +
            '\n' +
            '    int getBalance(InnerAvl n) {\n' +
            '        return (n == null) ? 0 : height(n.rightChild) - height(n.leftChild);\n' +
            '    }\n' +
            '\n' +
            '    InnerAvl rotateRight(InnerAvl y) {\n' +
            '        InnerAvl x = y.leftChild;\n' +
            '        InnerAvl z = x.rightChild;\n' +
            '        x.rightChild = y;\n' +
            '        y.leftChild = z;\n' +
            '        updateHeight(y);\n' +
            '        updateHeight(x);\n' +
            '        return x;\n' +
            '    }\n' +
            '\n' +
            '    InnerAvl rotateLeft(InnerAvl y) {\n' +
            '        InnerAvl x = y.rightChild;\n' +
            '        InnerAvl z = x.leftChild;\n' +
            '        x.leftChild = y;\n' +
            '        y.rightChild = z;\n' +
            '        updateHeight(y);\n' +
            '        updateHeight(x);\n' +
            '        return x;\n' +
            '    }\n' +
            '\n' +
            '    InnerAvl fixBalance(InnerAvl z) {\n' +
            '        updateHeight(z);\n' +
            '        int balance = getBalance(z);\n' +
            '        if (balance > 1) {\n' +
            '            if (height(z.rightChild.rightChild) > height(z.rightChild.leftChild)) {\n' +
            '                z = rotateLeft(z);\n' +
            '            } else {\n' +
            '                z.rightChild = rotateRight(z.rightChild);\n' +
            '                z = rotateLeft(z);\n' +
            '            }\n' +
            '        } else if (balance < -1) {\n' +
            '            if (height(z.leftChild.leftChild) > height(z.leftChild.rightChild))\n' +
            '                z = rotateRight(z);\n' +
            '            else {\n' +
            '                z.leftChild = rotateLeft(z.leftChild);\n' +
            '                z = rotateRight(z);\n' +
            '            }\n' +
            '        }\n' +
            '        return z;\n' +
            '    }\n' +
            '\n' +
            '    void add(int newKey) {\n' +
            '        if (root == null) {\n' +
            '            root = new InnerAvl(newKey);\n' +
            '        } else {\n' +
            '            root = add(root, newKey);\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    InnerAvl add(InnerAvl n, int k) {\n' +
            '        if (n.element > k) {\n' +
            '            n.leftChild = add(n.leftChild, k);\n' +
            '        } else if (n.element < k) {\n' +
            '            n.rightChild = add(n.rightChild, k);\n' +
            '        } else {\n' +
            '            throw new IllegalArgumentException("duplicate Key!");\n' +
            '        }\n' +
            '        return fixBalance(n);\n' +
            '    }\n' +
            '\n' +
            '    static public class InnerAvl {\n' +
            '        int element, height;\n' +
            '        InnerAvl leftChild, rightChild;\n' +
            '\n' +
            '        public InnerAvl(int k) {\n' +
            '            element = k;\n' +
            '            height = 1;\n' +
            '            leftChild = null;\n' +
            '            rightChild = null;\n' +
            '        }\n' +
            '    }\n' +
            '}\n'
    },
    {
        'key': 1,
        'shortDescription':'first coding exp',
        'isExperimental': true,
        'ideSettings':{},
        'description': 'package com.example.avl;\n' +
            '/*\n' +
            '\n' +
            'TASK DESCRIPTION: There is a bug in one method in class below.\n' +
            'Please, try to find and fix it.\n' +
            '\n' +
            ' */\n' +
            '\n' +
            'public class AVL {\n' +
            '    private static final Node nil = new Node();\n' +
            '\n' +
            '    private Node root;\n' +
            '\n' +
            '    public int height() {\n' +
            '        return root.height;\n' +
            '    }\n' +
            '\n' +
            '    public void insert(int newKey) {\n' +
            '        if (root == nil) {\n' +
            '            root = new Node(newKey);\n' +
            '        } else {\n' +
            '            insert(root, newKey);\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    private Node insert(Node node, int key) {\n' +
            '        if (node.key == key) {\n' +
            '            return node;\n' +
            '        }\n' +
            '\n' +
            '        if (node.key > key) {\n' +
            '            node.left = insert(node.left, key);\n' +
            '        } else {\n' +
            '            node.right = insert(node.right, key);\n' +
            '        }\n' +
            '\n' +
            '        return rebalance(node);\n' +
            '    }\n' +
            '\n' +
            '    private static Node rebalance(Node node) {\n' +
            '        node.updateHeight();\n' +
            '        int balance = node.getBalance();\n' +
            '\n' +
            '        if (balance > 1) {\n' +
            '            if (node.right.right.height > node.right.left.height) {\n' +
            '                node = rotateLeft(node);\n' +
            '            } else {\n' +
            '                node = rotateLeftBig(node);\n' +
            '            }\n' +
            '        } else if (balance < -1) {\n' +
            '            if (node.left.left.height > node.left.right.height) {\n' +
            '                node = rotateRight(node);\n' +
            '            } else {\n' +
            '                node = rotateRightBig(node);\n' +
            '            }\n' +
            '        }\n' +
            '\n' +
            '        return node;\n' +
            '    }\n' +
            '\n' +
            '    private static Node rotateRight(Node node) {\n' +
            '        Node left = node.left;\n' +
            '        Node right = left.right;\n' +
            '        left.right = node;\n' +
            '        node.left = right;\n' +
            '        node.updateHeight();\n' +
            '        left.updateHeight();\n' +
            '        return left;\n' +
            '    }\n' +
            '\n' +
            '    private static Node rotateRightBig(Node node) {\n' +
            '        node.left = rotateLeft(node.left);\n' +
            '        return rotateRight(node);\n' +
            '    }\n' +
            '\n' +
            '    private static Node rotateLeft(Node node) {\n' +
            '        Node right = node.right;\n' +
            '        Node left = right.left;\n' +
            '        right.left = node;\n' +
            '        node.right = left;\n' +
            '        node.updateHeight();\n' +
            '        right.updateHeight();\n' +
            '        return right;\n' +
            '    }\n' +
            '\n' +
            '    private static Node rotateLeftBig(Node node) {\n' +
            '        node.right = rotateRight(node.right);\n' +
            '        return rotateLeft(node);\n' +
            '    }\n' +
            '\n' +
            '    static public class Node {\n' +
            '        int key, height;\n' +
            '        Node left, right;\n' +
            '\n' +
            '        public Node(int k) {\n' +
            '            key = k;\n' +
            '            height = 1;\n' +
            '            left = nil;\n' +
            '            right = nil;\n' +
            '        }\n' +
            '\n' +
            '        public Node() {\n' +
            '            key = Integer.MIN_VALUE;\n' +
            '            height = 0;\n' +
            '            left = nil;\n' +
            '            right = nil;\n' +
            '        }\n' +
            '\n' +
            '        void updateHeight() {\n' +
            '            height = 1 + Math.max(left.height, right.height);\n' +
            '        }\n' +
            '\n' +
            '        int getBalance() {\n' +
            '            return right.height - left.height;\n' +
            '        }\n' +
            '    }\n' +
            '}\n'
    },
    {
        'key': 2,
        'shortDescription':'first coding exp',
        'isExperimental': true,
        'ideSettings':{},
        'description': 'package com.example.treap;\n' +
            '/*\n' +
            '\n' +
            'TASK DESCRIPTION: There is a bug in one method in class below.\n' +
            'Please, try to find and fix it.\n' +
            '\n' +
            ' */\n' +
            '\n' +
            'import java.util.Random;\n' +
            '\n' +
            'class Treap {\n' +
            '    private TreapNode root;\n' +
            '    private static final Random random = new Random();\n' +
            '\n' +
            '    private static final TreapNode nil = new TreapNode();\n' +
            '\n' +
            '    /**\n' +
            '     * Constructor\n' +
            '     **/\n' +
            '    public Treap() {\n' +
            '        root = nil;\n' +
            '    }\n' +
            '\n' +
            '    /**\n' +
            '     * Function to check if tree is empty\n' +
            '     **/\n' +
            '    public boolean isEmpty() {\n' +
            '        return root == nil;\n' +
            '    }\n' +
            '\n' +
            '    /**\n' +
            '     * Make the tree logically empty\n' +
            '     **/\n' +
            '    public void makeEmpty() {\n' +
            '        root = nil;\n' +
            '    }\n' +
            '\n' +
            '    /**\n' +
            '     * Functions to insert data\n' +
            '     **/\n' +
            '    public void insert(int X) {\n' +
            '        if (root == nil) {\n' +
            '            root = new TreapNode(X);\n' +
            '        } else {\n' +
            '            root = insert(X, root);\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    /* Function to left-rotate a given treap\n' +
            '          n                         R\n' +
            '         / \\      Left Rotate      / \\\n' +
            '        L   R        ———>         n   Y\n' +
            '           / \\                   / \\\n' +
            '          X   Y                 L   X\n' +
            '    */\n' +
            '    public static TreapNode rotateLeft(TreapNode node) {\n' +
            '        TreapNode R = node.right;\n' +
            '        TreapNode X = node.right.left;\n' +
            '        // rotate\n' +
            '        R.left = node;\n' +
            '        node.right = X;\n' +
            '        // set a new root\n' +
            '        return R;\n' +
            '    }\n' +
            '\n' +
            '    private static TreapNode checkAndRotateLeft(TreapNode node) {\n' +
            '        if (node.right != nil && node.right.priority > node.priority) {\n' +
            '            return rotateLeft(node);\n' +
            '        }\n' +
            '        return node;\n' +
            '    }\n' +
            '\n' +
            '    /* Function to right-rotate a given treap\n' +
            '            n                        L\n' +
            '           / \\     Right Rotate     / \\\n' +
            '          L   R        ———>        X   n\n' +
            '         / \\                          / \\\n' +
            '        X   Y                        Y   R\n' +
            '    */\n' +
            '    public static TreapNode rotateRight(TreapNode node) {\n' +
            '        TreapNode L = node.left;\n' +
            '        TreapNode Y = node.left.right;\n' +
            '        // rotate\n' +
            '        L.right = node;\n' +
            '        node.left = Y;\n' +
            '        // set a new root\n' +
            '        return L;\n' +
            '    }\n' +
            '\n' +
            '    private static TreapNode checkAndRotateRight(TreapNode node) {\n' +
            '        if (node.left != nil && node.left.priority > node.priority) {\n' +
            '            return rotateRight(node);\n' +
            '        }\n' +
            '        return node;\n' +
            '    }\n' +
            '\n' +
            '    private TreapNode insert(int element, TreapNode node) {\n' +
            '        if (node == nil) {\n' +
            '            return new TreapNode(element);\n' +
            '        }\n' +
            '\n' +
            '        if (element == node.element) {\n' +
            '            return node;\n' +
            '        }\n' +
            '\n' +
            '        if (element < node.element) {\n' +
            '            node.left = insert(element, node.left);\n' +
            '            node = checkAndRotateLeft(node);\n' +
            '        } else {\n' +
            '            node.right = insert(element, node.right);\n' +
            '            node = checkAndRotateRight(node);\n' +
            '        }\n' +
            '\n' +
            '        return node;\n' +
            '    }\n' +
            '\n' +
            '    /**\n' +
            '     * Functions to search for an element\n' +
            '     **/\n' +
            '    public boolean search(int val) {\n' +
            '        return search(root, val);\n' +
            '    }\n' +
            '\n' +
            '    private boolean search(TreapNode r, int val) {\n' +
            '        boolean found = false;\n' +
            '        while ((r != nil) && !found) {\n' +
            '            int rval = r.element;\n' +
            '            if (val < rval) r = r.left;\n' +
            '            else if (val > rval) r = r.right;\n' +
            '            else {\n' +
            '                found = true;\n' +
            '                break;\n' +
            '            }\n' +
            '            found = search(r, val);\n' +
            '        }\n' +
            '        return found;\n' +
            '    }\n' +
            '\n' +
            '    static class TreapNode {\n' +
            '        TreapNode left, right;\n' +
            '        int priority, element;\n' +
            '\n' +
            '        /**\n' +
            '         * Constructor\n' +
            '         **/\n' +
            '        public TreapNode() {\n' +
            '            element = 0;\n' +
            '            left = this;\n' +
            '            right = this;\n' +
            '            priority = Integer.MAX_VALUE;\n' +
            '        }\n' +
            '\n' +
            '        /**\n' +
            '         * Constructor\n' +
            '         **/\n' +
            '        public TreapNode(int ele) {\n' +
            '            this(ele, null, null);\n' +
            '        }\n' +
            '\n' +
            '        /**\n' +
            '         * Constructor\n' +
            '         **/\n' +
            '        public TreapNode(int ele, TreapNode l, TreapNode r) {\n' +
            '            element = ele;\n' +
            '            left = l;\n' +
            '            right = r;\n' +
            '            priority = random.nextInt();\n' +
            '        }\n' +
            '    }\n' +
            '}\n'
    },
    {
        'key': 3,
        'shortDescription':'first coding exp',
        'isExperimental': true,
        'ideSettings':{},
        'description': 'package com.example.treap;\n' +
            '/*\n' +
            '\n' +
            'TASK DESCRIPTION: There is a bug in one method in class below.\n' +
            'Please, try to find and fix it.\n' +
            '\n' +
            ' */\n' +
            '\n' +
            'import java.util.Random;\n' +
            '\n' +
            'class Treap {\n' +
            '    private TreapNode root;\n' +
            '    private static final Random random = new Random();\n' +
            '\n' +
            '    private static final TreapNode nil = new TreapNode();\n' +
            '\n' +
            '    /**\n' +
            '     * Constructor\n' +
            '     **/\n' +
            '    public Treap() {\n' +
            '        root = nil;\n' +
            '    }\n' +
            '\n' +
            '    /**\n' +
            '     * Function to check if tree is empty\n' +
            '     **/\n' +
            '    public boolean isEmpty() {\n' +
            '        return root == nil;\n' +
            '    }\n' +
            '\n' +
            '    /**\n' +
            '     * Make the tree logically empty\n' +
            '     **/\n' +
            '    public void makeEmpty() {\n' +
            '        root = nil;\n' +
            '    }\n' +
            '\n' +
            '    /**\n' +
            '     * Functions to insert data\n' +
            '     **/\n' +
            '    public void insert(int X) {\n' +
            '        if (root == nil) {\n' +
            '            root = new TreapNode(X);\n' +
            '        } else {\n' +
            '            root = insert(X, root);\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    private TreapNode insert(int X, TreapNode node) {\n' +
            '        if (node == nil) {\n' +
            '            return new TreapNode(X);\n' +
            '        }\n' +
            '        if (X < node.elementValue) {\n' +
            '            node.leftChild = insert(X, node.leftChild);\n' +
            '            if (node.rightChild.priorityValue < node.priorityValue) {\n' +
            '                TreapNode R = node.rightChild;\n' +
            '                node.rightChild = R.leftChild;\n' +
            '                R.leftChild = node;\n' +
            '                return R;\n' +
            '            }\n' +
            '        } else if (X > node.elementValue) {\n' +
            '            node.rightChild = insert(X, node.rightChild);\n' +
            '            if (node.leftChild.priorityValue < node.priorityValue) {\n' +
            '                TreapNode L = node.leftChild;\n' +
            '                node.leftChild = L.rightChild;\n' +
            '                L.rightChild = node;\n' +
            '                return L;\n' +
            '            }\n' +
            '        }\n' +
            '\n' +
            '        return node;\n' +
            '    }\n' +
            '\n' +
            '    /**\n' +
            '     * Functions to count number of nodes\n' +
            '     **/\n' +
            '    public int countNodes() {\n' +
            '        return countNodes(root);\n' +
            '    }\n' +
            '\n' +
            '    private int countNodes(TreapNode r) {\n' +
            '        if (r == nil)\n' +
            '            return 0;\n' +
            '        else {\n' +
            '            int l = 1;\n' +
            '            l += countNodes(r.leftChild);\n' +
            '            l += countNodes(r.rightChild);\n' +
            '            return l;\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    static class TreapNode {\n' +
            '        TreapNode leftChild, rightChild;\n' +
            '        int priorityValue, elementValue;\n' +
            '\n' +
            '        /**\n' +
            '         * Constructor\n' +
            '         **/\n' +
            '        public TreapNode() {\n' +
            '            elementValue = 0;\n' +
            '            leftChild = this;\n' +
            '            rightChild = this;\n' +
            '            priorityValue = Integer.MAX_VALUE;\n' +
            '        }\n' +
            '\n' +
            '        /**\n' +
            '         * Constructor\n' +
            '         **/\n' +
            '        public TreapNode(int ele) {\n' +
            '            this(ele, null, null);\n' +
            '        }\n' +
            '\n' +
            '        /**\n' +
            '         * Constructor\n' +
            '         **/\n' +
            '        public TreapNode(int ele, TreapNode l, TreapNode r) {\n' +
            '            elementValue = ele;\n' +
            '            leftChild = l;\n' +
            '            rightChild = r;\n' +
            '            priorityValue = random.nextInt();\n' +
            '        }\n' +
            '    }\n' +
            '}\n'
    },
    {
        'key': 4,
        'shortDescription':'first coding exp',
        'isExperimental': true,
        'ideSettings':{},
        'description': 'package com.example;\n' +
            '/*\n' +
            '\n' +
            'TASK DESCRIPTION: Please, look at the following code \n' +
            'and make refactoring where you think it is necessary\n' +
            '\n' +
            ' */\n' +
            '\n' +
            'import java.util.Stack;\n' +
            'import java.util.TreeMap;\n' +
            '\n' +
            'public class TrieImpl {\n' +
            '    private static class TrieNode {\n' +
            '        final TreeMap<Character, TrieNode> children = new TreeMap<>();\n' +
            '        Boolean isTerminal = false;\n' +
            '        int size = 0;\n' +
            '    }\n' +
            '\n' +
            '    private final TrieNode root = new TrieNode();\n' +
            '\n' +
            '    public boolean add(String element) throws IllegalArgumentException {\n' +
            '        if (element == null) {\n' +
            '            throw new IllegalArgumentException("Cannot add \'null\' to a trie!");\n' +
            '        }\n' +
            '        Stack<TrieNode> s = new Stack<>();\n' +
            '        s.add(root);\n' +
            '        // go through the element character by character, adding missing nodes to the trie\n' +
            '        for (int i = 0; i < element.length(); i++) {\n' +
            '            TrieNode node = s.peek();\n' +
            '            Character currChar = element.charAt(i);\n' +
            '            if (!node.children.containsKey(currChar)) {\n' +
            '                node.children.put(currChar, new TrieNode());\n' +
            '            }\n' +
            '            s.push(node.children.get(currChar));\n' +
            '        }\n' +
            '        // if the last node became terminal then the sizes of all nodes on the path increase by 1\n' +
            '        if (!s.peek().isTerminal) {\n' +
            '            s.peek().isTerminal = true;\n' +
            '            while (!s.empty()) {\n' +
            '                s.pop().size += 1;\n' +
            '            }\n' +
            '            return true;\n' +
            '        }\n' +
            '        return false;\n' +
            '    }\n' +
            '\n' +
            '    public boolean contains(String element) throws IllegalArgumentException {\n' +
            '        if (element == null) {\n' +
            '            throw new IllegalArgumentException("Trie cannot contain \'null\'!");\n' +
            '        }\n' +
            '        TrieNode node = root;\n' +
            '        for (int i = 0; i < element.length(); i++) {\n' +
            '            Character currChar = element.charAt(i);\n' +
            '            if (!node.children.containsKey(currChar)) {\n' +
            '                return false;\n' +
            '            }\n' +
            '            node = node.children.get(currChar);\n' +
            '        }\n' +
            '        return node.isTerminal;\n' +
            '    }\n' +
            '}'
    },
];

module.exports = tasks;

