import { Avatar } from "@chakra-ui/react";

interface ModalProps {
  onClose: () => void;
}

const accounts = [
  {
    name: "user1",
    username: "@user1",
    pass: "user1",
    photo: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "user2",
    username: "@user2",
    pass: "user2",
    photo: "https://bit.ly/ryan-florence",
  },
  {
    name: "user3",
    username: "@user3",
    pass: "user3",
    photo: "https://bit.ly/dan-abramov",
  },
];

export function Modal({ onClose }: ModalProps): JSX.Element {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <p
                  className="text-lg leading-6 font-bold text-gray-900"
                  id="modal-headline"
                >
                  Login Help
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  {accounts.map((acc) => {
                    return (
                      <div key={acc.name} className="flex items-center">
                        <Avatar size="sm" name="Kent Dodds" src={acc.photo} />
                        <div className="ml-3 flex items-cente">
                          <p className="text-sm font-bold text-gray-800">
                            {acc.name} ➡{" "}
                          </p>
                          <p className="text-sm text-gray-500 font-semibold">
                            username : {acc.username} ,
                          </p>
                          <p className="text-sm text-gray-500 font-semibold">
                            password : {acc.pass}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
