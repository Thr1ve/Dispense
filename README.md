## To install :

1. Install node / npm if you haven't already ( http://nodejs.org/ )
    * My current Versions etc. that this is currently working with:
        **MAC:

            ***Node: 0.10.33
            ***NPM: 2.1.11
            ***OS X: 10.9.5

        **WINDOWS (64 bit)

            ***Node: 0.10.34
            ***NPM: 2.1.14
            ***Windows 7

    * A Note about Windows: Some things in NPM world involve rebuilding the node-gyp. In order to do this, you'll need to have Python install and added to your PATH.

        **Python 2.7: https://www.python.org/downloads/release/python-279/
            ***Be sure to manually tell the Python installer to add the program to your path; it is disabled by default. (drop-down box, "add full feature to hard drive" or something like that)

2. Navigate to the directory of your choice and Clone the git repository
    ```
    $ git clone https://github.com/Thr1ve/Dispense.git
    ```

3. Navigate to the new repo and npm install
    ```
    $ cd Dispense
    $ npm install
    ```

4. Start the localhost Dev server and open your browser to localhost:3000
    ```
    $ npm start
    ```
