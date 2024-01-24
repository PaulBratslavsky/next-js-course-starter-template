import { activity } from "@/app/fake-data";

interface ActivityItemProps {
  id: number;
  person: {
    name: string;
  };
  dateTime: string;
  date: string;
  comment: string;
}

export default function Comments() {
  return (
    <div>
      <div className="my-6">
        <div className="h-[500px] overflow-scroll">
          <ul className="space-y-6">
            {activity.map((activityItem: ActivityItemProps) => (
              <li key={activityItem.id} className="relative flex gap-x-4">
                <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-base-300">
                  <div className="flex justify-between gap-x-4">
                    <div className="py-0.5 text-xs leading-5 flex gap-2">
                      <span className="font-medium text-secondary">
                        {activityItem.person.name}
                      </span>
                      <span className="font-medium text-primary">
                        commented
                      </span>
                    </div>
                    <time
                      dateTime={activityItem.dateTime}
                      className="flex-none py-0.5 text-xs leading-5"
                    >
                      {activityItem.date}
                    </time>
                  </div>
                  <p className="text-sm leading-6">{activityItem.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <form action="#" className="w-full">
          <textarea
            placeholder="Comment"
            className="textarea textarea-bordered border-base-300 textarea-lg w-full "
          ></textarea>
          <button type="submit" className="btn btn-primary float-right mt-2">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}
